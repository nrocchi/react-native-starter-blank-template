class TextHelper {
  static LowercaseAll = (text) => {
    return text.toLowerCase()
  }

  static CapitalizeAll = (text) => {
    return text.toUpperCase()
  }

  static CapitalizeFirst = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  }

  static RemoveLastChar = (text) => {
    return text.slice(0, -1)
  }
}

export default TextHelper
