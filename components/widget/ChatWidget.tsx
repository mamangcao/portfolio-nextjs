'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X, ArrowUp, MessageSquareMore } from 'lucide-react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Define the shape of a message object
interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Specific type for the div reference
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Type the form event
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ 
            role: m.role, 
            content: m.content 
          }))
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      if (!response.body) throw new Error('No response body');

      const aiMessageId = Date.now() + 1;
      setMessages(prev => [...prev, { id: aiMessageId, role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        
        setMessages(prev => 
          prev.map(msg => 
            msg.id === aiMessageId 
              ? { ...msg, content: msg.content + chunk } 
              : msg
          )
        );
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <Card className="w-[350px] sm:w-[380px] h-[550px] dark:bg-black shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300 border-0 rounded-2xl overflow-hidden">
          
          <CardHeader className="p-4 dark:bg-black border-b flex flex-row items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src="/profile.png" alt="Abdul Haleem" />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm flex items-center justify-center sm:justify-start gap-1">Abdul Haleem Mamangcao
                  <CheckBadgeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-500" />
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer"
            >
              <X className="text-black dark:text-white" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-0 overflow-hidden dark:bg-black">
            <ScrollArea className="h-full p-4">
              {messages.length === 0 && (
                <div className="flex gap-3 mb-4">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/profile.png" />
                    <AvatarFallback>AH</AvatarFallback>
                  </Avatar>
                  <div className="dark:bg-midnight-50 border p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] text-gray-700 dark:text-white">
                    <p>
                      Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-2 ${
                      m.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {m.role !== 'user' && (
                      <Avatar className="h-8 w-8 mt-1 border">
                        <AvatarImage src="/profile.png" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`px-4 py-2.5 text-sm shadow-sm max-w-[85%] ${
                        m.role === 'user'
                          ? 'bg-midnight-50 dark:bg-gray-50 text-white dark:text-zinc-900 rounded-2xl rounded-tr-none whitespace-pre-wrap'
                          : 'bg-white dark:bg-zinc-900 border text-gray-700 dark:text-white rounded-2xl rounded-tl-none'
                      }`}
                    >
                      {m.role === 'user' ? (
                        m.content
                      ) : (
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            // We use 'any' here for props because ReactMarkdown types can be complex to match perfectly
                            a: ({node, ...props}: any) => (
                              <a {...props} className="text-blue-500 hover:underline font-medium break-words" target="_blank" rel="noopener noreferrer" />
                            ),
                            strong: ({node, ...props}: any) => (
                              <span {...props} className="font-bold text-black dark:text-white" />
                            ),
                            ul: ({node, ...props}: any) => (
                              <ul {...props} className="list-disc list-inside ml-2 mt-1 space-y-1" />
                            ),
                            ol: ({node, ...props}: any) => (
                              <ol {...props} className="list-decimal list-inside ml-2 mt-1 space-y-1" />
                            ),
                            li: ({node, ...props}: any) => (
                              <li {...props} className="" />
                            ),
                            p: ({node, ...props}: any) => (
                              <p {...props} className="mb-2 last:mb-0 leading-relaxed" />
                            )
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                   <div className="flex gap-2 items-center ml-1">
                     <Avatar className="h-6 w-6">
                       <AvatarImage src="/profile.png" />
                     </Avatar>
                     <div className="flex gap-1">
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                     </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-3 dark:bg-black border-t flex flex-col gap-2">
            <form onSubmit={handleSend} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 bg-transparent border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300 rounded-xl h-11"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !input.trim()} 
                className="h-11 w-11 rounded-xl bg-gray-900 dark:bg-gray-500 hover:bg-black disabled:opacity-50 shrink-0 cursor-pointer"
              >
                <ArrowUp className="h-5 w-5 text-white" />
              </Button>
            </form>
            
            <div className="w-full flex justify-between px-1">
              <span className="text-[10px] text-gray-400 dark:text-white">
                Ask me about programming, web dev, or tech!
              </span>
            </div>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-12 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 px-5 cursor-pointer
          ${isOpen 
            ? 'w-12 p-0 bg-gray-200 hover:bg-gray-300 text-gray-800' 
            : 'bg-black hover:bg-black dark:bg-white hover:dark:bg-white text-white dark:text-black'
          }
        `}
      >
        {isOpen ? (
            <X className="h-6 w-6" />
        ) : (
            <>
                <MessageSquareMore className="h-5 w-5 animate-wiggle" />
                <span className="font-medium cursor-pointer">Chat with Abdul Haleem</span>
            </>
        )}
      </Button>
    </div>
  );
}