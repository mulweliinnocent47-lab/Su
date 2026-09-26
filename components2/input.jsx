import "./input.css"
import { IconSearch, IconMail, IconLock, IconUser } from "./icons.jsx"

const iconFor = (type, id, hasLabel) => {
  if (type === "email") return <IconMail size={17} />
  if (type === "password") return <IconLock size={17} />
  if (id === "search" || !hasLabel) return <IconSearch size={17} />
  if (type === "text") return <IconUser size={17} />
  return null
}

export default function Input({must,logic, pro, id, type ="text", value, showIcon = true }) {
  const icon = showIcon ? iconFor(type, id, Boolean(pro)) : null
  return (
    <div className="field">
      {pro && <label htmlFor={id}>{pro}</label>}
      <div className="field-control">
        {icon}
        <input required={must} id={id} name={id} onChange={logic} type={type} placeholder={value} />
      </div>
    </div>
  )
}
