import { Cloud } from 'lucide-react'
import { FaJava, FaPython } from 'react-icons/fa'
import {
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
  SiSwagger,
} from 'react-icons/si'
import { techIcons } from '../data'

const ICONS = {
  FaJava,
  FaPython,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
  SiSwagger,
  Cloud,
}

export default function TechStack() {
  return (
    <section id="stack" className="px-6 py-16 border-t border-line">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest text-faint uppercase mb-6">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-6">
          {techIcons.map(({ name, icon, color }) => {
            const Icon = ICONS[icon]
            return (
              <div key={name} className="flex flex-col items-center gap-2 w-16 group">
                <div className="w-11 h-11 rounded-xl border border-line bg-surface flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <Icon size={20} color={color} />
                </div>
                <span className="text-[11px] text-faint text-center leading-tight">{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
