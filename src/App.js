import "./App.css";

function App() {
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Şehir Hava Durumları</h2>
            <p className="mt-4 text-lg dark:text-gray-400">Türkiye' deki illeri listeden seçerek 5 günlük hava durumu bilgilerine ulaşabilirsiniz. Şehir ismini kendiniz yazarak diğer ülkelerdeki şehirlerin hava durumu bilgilerine ulaşabilirsiniz.</p>
          </div>
          <div className="flex justify-around mt-6">
            <div>
              <select name="lang" id="" className="text-black w-10">
                <option value="tr" selected>
                  tr
                </option>
                <option value="fr">fr - France</option>
                <option value="gr">gr</option>
                <option value="tr">tr</option>
              </select>
            </div>

            <div>
              <select name="lang" id="" className="text-black w-10">
                <option value="tr" selected>
                  tr
                </option>
                <option value="fr">fr - France</option>
                <option value="gr">gr</option>
                <option value="tr">tr</option>
              </select>
            </div>

            <div>
              <select name="lang" id="" className="text-black w-10">
                <option value="tr" selected>
                  tr
                </option>
                <option value="fr">fr - France</option>
                <option value="gr">gr</option>
                <option value="tr">tr</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <h1 className=" text-6xl">İstanbul</h1>
          </div>
        </div>
      </div>
      {/* sd */}
      <div className="flex gap-4 px-2 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm dark:text-gray-400">July 29</p>
          </div>
          <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
          <div className="mb-2 text-3xl font-semibold">
            {" "}
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm dark:text-gray-400">July 29</p>
          </div>
          <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
          <div className="mb-2 text-3xl font-semibold">
            {" "}
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm dark:text-gray-400">July 29</p>
          </div>
          <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
          <div className="mb-2 text-3xl font-semibold">
            {" "}
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm dark:text-gray-400">July 29</p>
          </div>
          <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
          <div className="mb-2 text-3xl font-semibold">
            {" "}
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Dubai</h2>
            <p className="text-sm dark:text-gray-400">July 29</p>
          </div>
          <img src="https://openweathermap.org/img/wn/03n@4x.png" alt=""></img>
          <div className="mb-2 text-3xl font-semibold">
            {" "}
            32°
            <span className="mx-1 font-normal">/</span>20°
          </div>
          <p className="dark:text-gray-400">Partly cloudy</p>
        </div>
      </div>
    </>
  );
}

export default App;
