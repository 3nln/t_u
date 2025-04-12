const audioSources = [
  "https://uzhits.net/uploads/files/2025-04/ulugbek-rahmatullayev-mening-dostim_(uzhits.net).mp3",
  "https://uzhits.net/upload/files/2015-01/ogabek-sobirov-yoq-yoq_(uzhits.net).mp3",
  "https://uzhits.net/uploads/files/2025-01/janob-rasul-guncho_(uzhits.net).mp3"
];

export function AudioWidget() {
  return (
    <div className="space-y-4">
      {audioSources.map((src, index) => (
        <audio key={index} controls className="w-full">
          <source src={src} type="audio/mp3" />
        </audio>
      ))}
    </div>
  );
}