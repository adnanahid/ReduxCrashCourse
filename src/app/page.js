import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-10 text-black rounded-2xl text-center">
        <div>
          <Counter></Counter>
          <Counter></Counter>
        </div>
      </div>
    </div>
  );
}
