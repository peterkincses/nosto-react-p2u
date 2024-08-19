type ScriptLoadOptions = {
  position?: "head" | "body"
  attributes?: Record<string, string>    
}  

export default function scriptLoader(scriptSrc: string, options?: ScriptLoadOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = scriptSrc
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject()
    Object.entries(options?.attributes ?? {}).forEach(([k, v]) => script.setAttribute(k, v))
    if (options?.position === "head") {
      document.head.appendChild(script)    
    } else {
      document.body.appendChild(script)    
    }
    document.body.appendChild(script)
  })
}

export type ScriptLoader = typeof scriptLoader