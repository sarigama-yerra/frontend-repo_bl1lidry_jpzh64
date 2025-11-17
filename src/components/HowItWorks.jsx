import { motion } from 'framer-motion'
import { Shield, MessageSquare, Zap, CheckCircle2 } from 'lucide-react'

function Step({ number, title, children, icon }) {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{background:'#EF4444', color:'white'}}>
        {number}
      </div>
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-slate-900/90 text-white">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-1">{title}</div>
          <div className="text-slate-600 text-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
          AI That Knows When It's Wrong
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <Step number={1} title="AI Generates Response" icon={<MessageSquare size={20} />}>
            We watch your model's output stream in real-time.
          </Step>
          <Step number={2} title="We Intercept & Analyze (0.8s)" icon={<Shield size={20} />}> 
            A safety engine scans for hallucinations, pricing errors, and policy violations.
          </Step>
          <Step number={3} title="Risk Scored & Blocked" icon={<Zap size={20} />}> 
            If risk > threshold, we block and replace with a safe message.
          </Step>
          <Step number={4} title="Human Review & Learn" icon={<CheckCircle2 size={20} />}> 
            Incidents are logged for review and continuously improve via feedback.
          </Step>
        </div>
      </div>
    </section>
  )
}
