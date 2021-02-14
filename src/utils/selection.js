export default class SelectionUtil {
  static getString () {
    const selection = window.getSelection()
    return selection.toString()
  }

  static get () {
    return window.getSelection()
  }

  static getRange (index = 0) {
    return this.get().getRangeAt(index)
  }

  static findParentTag (tag) {
    const selection = SelectionUtil.get()
    const nodes = [
      selection.focusNode,
      selection.anchorNode
    ]

    let parentTag = null
    for (const parent of nodes) {
      while (parent.parentNode) {
        if (parent.parentNode.tagName === 'DIV') {
          break
        }

        if (parent.parentNode.tagName === tag) {
          parentTag = parent.parentNode
          break
        }
      }
    }

    return parentTag
  }
}
