export const loadScript = (src) => {
  const tag = document.createElement('script')
  tag.async = false
  tag.src = src
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(tag)
}
