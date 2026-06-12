const withCardLook = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="p-4">
        <div className="bg-gray-700 p-4 rounded-2xl py-5 text-white">
          <WrappedComponent {...props} />
        </div>
      </div>
    )
  }
}

export default withCardLook
