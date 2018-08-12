//添加class类名
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

//判断元素是否有某个class类名
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

//自定义属性的设置和获取
export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name

  //如果存在val，则是设值操作，否则，为取值操作
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
