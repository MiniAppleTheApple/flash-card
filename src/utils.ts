const buttonStyleTemplate = ({backgroundColor, textColor}: {backgroundColor: [string, string], textColor: [string, string]}): string => 
  `cursor-pointer
  px-5
  py-3
  rounded-md
  ${backgroundColor[0]}
  ${textColor[0]}
  ${backgroundColor[1]}
  ${textColor[1]}
  transition-colors`

const primaryButton = buttonStyleTemplate({
  backgroundColor: ["bg-glade-green-500", "hover:bg-glade-green-700"],
  textColor: ["text-timberwolf-500", "hover:text-timberwolf-700"],
})

const secondaryButton = buttonStyleTemplate({
  backgroundColor: ["bg-tom-thumb-500", "hover:bg-tom-thumb-700"],
  textColor: ["text-timberwolf-500", "hover:text-timberwolf-700"], 
})

const generateID = () => (Date.now() * Math.floor(Math.random() * 200)).toString(16)

export { buttonStyleTemplate, primaryButton, secondaryButton, generateID }
