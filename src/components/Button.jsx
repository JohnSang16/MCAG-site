export function Button({ variant = 'primary', onClick, children, type = 'button', className = '', disabled = false }) {
  const base = 'font-body font-medium text-sm px-6 py-3 rounded transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-text-primary text-surface hover:opacity-80 focus:ring-text-primary',
    secondary: 'bg-transparent text-text-primary border border-text-primary hover:opacity-80 focus:ring-text-primary',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
