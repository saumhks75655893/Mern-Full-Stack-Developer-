export const useCardLook = (Component) => {
  return (props) => {
    return (
      <div className="bg-gray-600 rounded-xl p-10 border-gray border-5">
        <Component  {...props} />
      </div>
    )
  }
}