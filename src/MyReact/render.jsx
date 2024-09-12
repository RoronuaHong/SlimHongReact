function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT' 
    ? document.createTextNode('') 
    : document.createElement(element.type)

  // 1. 赋予属性
  Object.keys(element.props).filter(key => key !== 'children').forEach(key => dom[key] = element.props[key])

  // 2. 递归渲染子元素【无法中断, 所以需要fiber架构】
  element.props.children.forEach(child => render(child, dom))

  // 3. 追加到父元素
  container.appendChild(dom)
}

export default render
