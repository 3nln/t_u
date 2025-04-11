export function ImageWidget() {
    return (
      <div className="flex items-center justify-center h-full">
        <img
          src="https://picsum.photos/500/200"
          alt="Widget"
          className="max-w-full min-h-full -mb-5 object-cover rounded-2xl"
        />
      </div>
    )
  }