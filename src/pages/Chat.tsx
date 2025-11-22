import React, { useState, useRef } from 'react';
import { Send, Paperclip, Mic, Square, Loader2, Upload, X, ChevronRight, ChevronDown, Folder, FolderOpen, Package, Check, Trash2, ShoppingCart, ImagePlus } from 'lucide-react';

// Inventory Data Structure
const inventoryData = {
  name: "Inventory",
  children: [
    {
      name: "Lighting",
      children: [
        {
          name: "Headlights",
          parts: [
            { id: "hl1", name: "LED Pro Headlight", price: 299, image: "🔦" },
            { id: "hl2", name: "Halogen Classic", price: 149, image: "💡" },
            { id: "hl3", name: "Xenon HID Light", price: 399, image: "✨" },
            { id: "hl4", name: "Projector Beam", price: 449, image: "🔆" },
            { id: "hl5", name: "Dual LED Strip", price: 349, image: "💫" },
          ]
        },
        {
          name: "Tail Lights",
          parts: [
            { id: "tl1", name: "LED Tail Light", price: 129, image: "🔴" },
            { id: "tl2", name: "Sequential Blinker", price: 179, image: "🟠" },
            { id: "tl3", name: "Smoked Tail Light", price: 159, image: "⚫" },
          ]
        },
        {
          name: "Indicators",
          parts: [
            { id: "in1", name: "LED Indicators", price: 79, image: "🟡" },
            { id: "in2", name: "Flush Mount", price: 99, image: "🔸" },
          ]
        }
      ]
    },
    {
      name: "Body Parts",
      children: [
        {
          name: "Fairings",
          parts: [
            { id: "fr1", name: "Full Fairing Kit", price: 899, image: "🛡️" },
            { id: "fr2", name: "Half Fairing", price: 499, image: "📐" },
            { id: "fr3", name: "Carbon Fiber Kit", price: 1299, image: "⬛" },
          ]
        },
        {
          name: "Fuel Tanks",
          parts: [
            { id: "ft1", name: "Custom Tank", price: 599, image: "⛽" },
            { id: "ft2", name: "Extended Range", price: 749, image: "🛢️" },
          ]
        },
        {
          name: "Seats",
          parts: [
            { id: "st1", name: "Racing Seat", price: 349, image: "🪑" },
            { id: "st2", name: "Comfort Touring", price: 449, image: "🛋️" },
            { id: "st3", name: "Gel Seat Pad", price: 199, image: "💺" },
          ]
        }
      ]
    },
    {
      name: "Wheels & Tires",
      children: [
        {
          name: "Wheels",
          parts: [
            { id: "wh1", name: "Alloy Sport Wheels", price: 799, image: "⭕" },
            { id: "wh2", name: "Carbon Fiber Rims", price: 1499, image: "🔘" },
            { id: "wh3", name: "Spoke Wheels Classic", price: 599, image: "🎡" },
          ]
        },
        {
          name: "Tires",
          parts: [
            { id: "tr1", name: "Sport Tires", price: 299, image: "⚫" },
            { id: "tr2", name: "Touring Tires", price: 249, image: "🛞" },
            { id: "tr3", name: "Off-road Tires", price: 349, image: "🏔️" },
          ]
        }
      ]
    },
    {
      name: "Performance",
      children: [
        {
          name: "Exhaust",
          parts: [
            { id: "ex1", name: "Slip-on Muffler", price: 449, image: "💨" },
            { id: "ex2", name: "Full System Racing", price: 1299, image: "🔥" },
            { id: "ex3", name: "Titanium Exhaust", price: 1799, image: "⚡" },
          ]
        },
        {
          name: "Air Filters",
          parts: [
            { id: "af1", name: "High Flow Filter", price: 89, image: "🌬️" },
            { id: "af2", name: "Racing Air Filter", price: 149, image: "💎" },
          ]
        },
        {
          name: "Brakes",
          parts: [
            { id: "br1", name: "Sport Brake Pads", price: 129, image: "🛑" },
            { id: "br2", name: "Racing Rotors", price: 399, image: "💿" },
            { id: "br3", name: "Brake Lines SS", price: 179, image: "〰️" },
          ]
        }
      ]
    },
    {
      name: "Accessories",
      children: [
        {
          name: "Mirrors",
          parts: [
            { id: "mr1", name: "Bar End Mirrors", price: 99, image: "🪞" },
            { id: "mr2", name: "Integrated Mirrors", price: 149, image: "👁️" },
          ]
        },
        {
          name: "Handlebars",
          parts: [
            { id: "hb1", name: "Clip-on Bars", price: 199, image: "🎯" },
            { id: "hb2", name: "Touring Bars", price: 249, image: "🔧" },
            { id: "hb3", name: "Drag Bars", price: 179, image: "➖" },
          ]
        },
        {
          name: "Guards",
          parts: [
            { id: "gd1", name: "Frame Sliders", price: 129, image: "🔒" },
            { id: "gd2", name: "Engine Guards", price: 249, image: "🛡️" },
          ]
        }
      ]
    }
  ]
};

// Flatten all parts for AI search
const getAllParts = (node, path = []) => {
  let parts = [];
  if (node.parts) {
    parts = node.parts.map(p => ({ ...p, category: path.join(' > ') }));
  }
  if (node.children) {
    node.children.forEach(child => {
      parts = [...parts, ...getAllParts(child, [...path, child.name])];
    });
  }
  return parts;
};

const allParts = getAllParts(inventoryData);

// Folder Component
const FolderItem = ({ node, level = 0, onSelectPart, selectedParts }) => {
  const [isOpen, setIsOpen] = useState(level < 1);
  const hasChildren = node.children && node.children.length > 0;
  const hasParts = node.parts && node.parts.length > 0;

  return (
    <div className="select-none">
      <div
        className="flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-gray-100 transition-colors"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {(hasChildren || hasParts) ? (
          isOpen ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />
        ) : <span className="w-4" />}
        {isOpen ? <FolderOpen className="w-4 h-4 text-amber-500" /> : <Folder className="w-4 h-4 text-amber-600" />}
        <span className="text-sm font-medium text-gray-700">{node.name}</span>
      </div>
      
      {isOpen && hasChildren && (
        <div>
          {node.children.map((child, idx) => (
            <FolderItem key={idx} node={child} level={level + 1} onSelectPart={onSelectPart} selectedParts={selectedParts} />
          ))}
        </div>
      )}
      
      {isOpen && hasParts && (
        <div className="ml-4">
          {node.parts.map((part) => (
            <div
              key={part.id}
              className={`flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer transition-colors ${
                selectedParts.some(p => p.id === part.id) ? 'bg-green-100 border border-green-300' : 'hover:bg-gray-100'
              }`}
              style={{ paddingLeft: `${(level + 1) * 12 + 8}px` }}
              onClick={() => onSelectPart(part)}
            >
              <Package className="w-4 h-4 text-orange-500" />
              <span className="text-lg">{part.image}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 truncate">{part.name}</p>
                <p className="text-xs text-green-600">${part.price}</p>
              </div>
              {selectedParts.some(p => p.id === part.id) && (
                <Check className="w-4 h-4 text-green-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: "Hello! I'm your bike customization assistant. You can:\n• Browse the inventory on the left\n• Drag & drop images to upload\n• Ask me to add parts (e.g., 'Add LED Pro Headlight')\n• View your selection on the right", timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSelectPart = (part) => {
    setSelectedParts(prev => {
      const exists = prev.some(p => p.id === part.id);
      if (exists) return prev.filter(p => p.id !== part.id);
      return [...prev, part];
    });
  };

  const processAICommand = (text) => {
    const lower = text.toLowerCase();
    
    if (lower.includes('add') || lower.includes('select') || lower.includes('choose')) {
      const foundParts = allParts.filter(p => lower.includes(p.name.toLowerCase()));
      if (foundParts.length > 0) {
        foundParts.forEach(p => {
          if (!selectedParts.some(sp => sp.id === p.id)) {
            setSelectedParts(prev => [...prev, p]);
          }
        });
        return `I've added ${foundParts.map(p => p.name).join(', ')} to your selection! 🏍️`;
      }
      const words = lower.split(' ');
      const fuzzyMatch = allParts.find(p => words.some(w => w.length > 3 && p.name.toLowerCase().includes(w)));
      if (fuzzyMatch && !selectedParts.some(sp => sp.id === fuzzyMatch.id)) {
        setSelectedParts(prev => [...prev, fuzzyMatch]);
        return `I found and added "${fuzzyMatch.name}" to your selection! 🏍️`;
      }
    }
    
    if (lower.includes('remove') || lower.includes('delete')) {
      const foundPart = selectedParts.find(p => lower.includes(p.name.toLowerCase()));
      if (foundPart) {
        setSelectedParts(prev => prev.filter(p => p.id !== foundPart.id));
        return `I've removed ${foundPart.name} from your selection.`;
      }
    }
    
    if (lower.includes('clear') || lower.includes('reset')) {
      setSelectedParts([]);
      return "I've cleared all parts from your selection.";
    }
    
    if (lower.includes('show') || lower.includes('list') || lower.includes('what')) {
      if (selectedParts.length === 0) return "Your selection is empty. Browse the inventory on the left or ask me to add specific parts!";
      const total = selectedParts.reduce((sum, p) => sum + p.price, 0);
      return `Your current selection:\n${selectedParts.map(p => `• ${p.image} ${p.name} - $${p.price}`).join('\n')}\n\nTotal: $${total}`;
    }

    return "I can help you customize your bike! Try:\n• 'Add LED Pro Headlight'\n• 'Add Racing Seat'\n• 'Show my selection'\n• 'Clear selection'\n\nOr browse the inventory on the left panel!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = processAICommand(userInput);
      const aiMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      scrollToBottom();
    }, 500);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    handleFiles(files);
  };

  const handleFiles = (files) => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, { id: Date.now(), name: file.name, url: e.target.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
    handleFiles(files);
  };

  const removeImage = (id) => setUploadedImages(prev => prev.filter(img => img.id !== id));
  const totalPrice = selectedParts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 relative z-50">
      <div className="flex h-screen relative z-50">
        {/* Left Sidebar - Inventory */}
        <div className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm relative z-50 hidden md:flex">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Folder className="w-5 h-5 text-amber-500" /> Inventory
            </h2>
            <p className="text-xs text-gray-500 mt-1">Click parts to add to selection</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {inventoryData.children.map((child, idx) => (
              <FolderItem key={idx} node={child} level={0} onSelectPart={handleSelectPart} selectedParts={selectedParts} />
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative z-50">
          <div className="p-6 border-b border-gray-200 bg-white">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              AI Chat Assistant
            </h1>
            <p className="text-gray-500 text-center text-sm mt-1">Your intelligent conversational partner</p>
          </div>

          {/* Drop Zone & Messages */}
          <div
            className={`flex-1 overflow-y-auto p-6 transition-colors relative ${isDragging ? 'bg-blue-50 border-2 border-dashed border-blue-400' : 'bg-gradient-to-b from-white to-gray-50'}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {isDragging && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
                <div className="text-center">
                  <Upload className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-xl text-gray-700">Drop images here</p>
                </div>
              </div>
            )}

            {/* Uploaded Images */}
            {uploadedImages.length > 0 && (
              <div className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-2"><ImagePlus className="w-4 h-4" /> Uploaded Images</p>
                <div className="flex gap-2 flex-wrap">
                  {uploadedImages.map(img => (
                    <div key={img.id} className="relative group">
                      <img src={img.url} alt={img.name} className="w-20 h-20 object-cover rounded-lg border border-gray-200" />
                      <button onClick={() => removeImage(img.id)} className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        <X className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                    <span className="text-xs opacity-60 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex items-center gap-2">
              <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} accept="image/*" multiple />
              <button onClick={() => fileInputRef.current?.click()} className="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Paperclip className="w-4 h-4 text-gray-500" />
              </button>
              <button onClick={() => setIsRecording(!isRecording)} className={`p-2.5 rounded-lg border transition-colors ${isRecording ? 'bg-red-500 border-red-500 text-white' : 'border-gray-200 hover:bg-gray-50'}`}>
                {isRecording ? <Square className="w-4 h-4" /> : <Mic className="w-4 h-4 text-gray-500" />}
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading || !input.trim()} className="p-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">Press Enter to send</p>
          </div>
        </div>

        {/* Right Sidebar - Selection */}
        <div className="w-72 bg-white border-l border-gray-200 flex flex-col shadow-sm relative z-50 hidden lg:flex">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange-500" /> Selection
            </h2>
            <p className="text-xs text-gray-500 mt-1">{selectedParts.length} parts selected</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {selectedParts.length === 0 ? (
              <p className="text-gray-400 text-sm text-center py-8">No parts selected yet.<br/>Browse inventory or ask AI!</p>
            ) : (
              selectedParts.map(part => (
                <div key={part.id} className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg border border-gray-100 group hover:border-gray-200 transition-colors">
                  <span className="text-xl">{part.image}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 truncate">{part.name}</p>
                    <p className="text-xs text-green-600 font-medium">${part.price}</p>
                  </div>
                  <button onClick={() => handleSelectPart(part)} className="p-1 rounded hover:bg-red-100 opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))
            )}
          </div>
          {selectedParts.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600 font-medium">Total:</span>
                <span className="text-xl font-bold text-green-600">${totalPrice}</span>
              </div>
              <button className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-medium transition-colors">
                Confirm Selection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;