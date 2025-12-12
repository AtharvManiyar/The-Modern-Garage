import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import Gallery from "./pages/Gallery";
import EmailPage from "./pages/EmailPage";
import AdminDashboard from "./components/AdminDashboard";
import DataDisplay from "./components/DataDisplay";
import NotFound from "./pages/NotFound";
import ModernStore from "./pages/ModernStore";
import HelmetsCards from "./components/HelmetsCards";
import RidingGearsCards from "../public/RidingGearsCards";
import LEDcards from "./components/LEDcards";
import FogLightMS from "./components/FogLightMS";
import TailLightMS from "./components/TailLightMS";
import IndicatorMS from "./components/IndicatorMS";
import CrashGuardMS from "./components/CrashGuardMS";
import SideMirrorMS from "./components/SideMirrorSM";
import ExhaustSystemMS from "./components/ExhaustSystemMS";
import AlloyStickerMS from "./components/AlloyStickerMS";
import MarketPlace from "./pages/MarketPlace";
import BuyBike from "./components/BuyBike";
import BIkeSell from "./components/BIkeSell";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/email" element={<EmailPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/display" element={<DataDisplay />} />
          {/* MS */}
          <Route path="/modern-store" element={<ModernStore />} />
          <Route path="/modern-store/helmets" element={<HelmetsCards />}/>
          <Route path="/modern-store/riding-gears" element={<RidingGearsCards />}/>
          <Route path="/modern-store/led-headlight" element={<LEDcards />}/>
          <Route path="/modern-store/fog-lamps" element={<FogLightMS />}/>
          <Route path="/modern-store/taillight" element={<TailLightMS />}/>
          <Route path="/modern-store/indicators" element={<IndicatorMS />}/>
          <Route path="/modern-store/crash-guards" element={<CrashGuardMS />}/>
          <Route path="/modern-store/side-mirrors" element={<SideMirrorMS />}/>
          <Route path="/modern-store/exhaust" element={<ExhaustSystemMS />}/>
          <Route path="/modern-store/stickers" element={<AlloyStickerMS />}/>

          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/marketplace/buy" element={<BuyBike />} />
          <Route path="/marketplace/sell" element={<BIkeSell />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; 