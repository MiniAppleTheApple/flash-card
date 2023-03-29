const buttonStyleTemplate = ({backgroundColor, textColor}: {backgroundColor: [string, string], textColor: [string, string]}): string => 
  `cursor-pointer
  px-5
  py-3
  ${backgroundColor[0]}
  ${textColor[0]}
  ${backgroundColor[1]}
  ${textColor[1]}
  transition-colors`

const primaryButton = buttonStyleTemplate({
  backgroundColor: ["bg-primary-500", "hover:bg-primary-700"],
  textColor: ["text-screamin-green-500", "hover:text-screamin-green-700"],
})

const secondaryButton = buttonStyleTemplate({
  backgroundColor: ["bg-secondary-500", "hover:bg-secondary-700"],
  textColor: ["text-canary-500", "hover:text-canary-700"], 
})

export {buttonStyleTemplate, primaryButton, secondaryButton}