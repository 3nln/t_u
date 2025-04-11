export function VideoWidget() {
    return (
      <div className="flex items-center justify-center h-full">
        <video controls className="max-w-full max-h-full">
          <source src="https://ds12-06s.freekino.net/720/freekino.net_boshqotirma_2_mult_uzm_720.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }