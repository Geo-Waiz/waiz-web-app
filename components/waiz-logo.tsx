import { Brain } from "lucide-react"

interface WaizLogoProps {
  className?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
}

export function WaizLogo({ className = "", showIcon = true, size = "md" }: WaizLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showIcon && (
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <Brain className={`${iconSizes[size]} text-primary-foreground`} />
        </div>
      )}
      <span className={`${sizeClasses[size]} font-bold text-foreground`}>
        w<span className="text-primary font-extrabold">AI</span>z
      </span>
    </div>
  )
}
