export default function Page1() {
    return (
      <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl">
        <h1 className="text-3xl font-bold mt-8">Products</h1>
        <div className="mt-8 grid grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">IMAGE</div>
            
          </div>
          <p className="text-lg">Description</p>
  
          <p className="text-lg">Description</p>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">IMAGE</div>
            
          </div>
  
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">IMAGE</div>
            
          </div>
          <p className="text-lg">Description</p>
        </div>
      </div>
    );
  }
  