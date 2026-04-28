import React from 'react'
import IconAI from '../../assets/IconAI.svg';


const FeedbackAI = ({result, loading}) => {
    return (
      <div className="container flex flex-col p-5 gap-5 bg-secondary w-5/8 h-auto rounded-xl ">
        <div className=" flex flex-col items-start justify-start h-full">
          <div className="flex flex-row items-center gap-2">
            <img src={IconAI} alt="AI Icon" width="30" height="30" />
            <div className="">
              <h1 className="font-bold text-xl ">AI Insight</h1>
              <p className="text-md text-gray-500">
                Berdasarkan data anda, berikut adalah evaluasi keterampilan Anda
                saat ini.
              </p>
            </div>
          </div>
        </div>
        <div className="container text-md bg-white rounded-xl p-7 text-gray-500 max-h-50 overflow-y-auto">
          {/* 🔄 Loading */}
          {loading && <p>AI sedang menganalisis...</p>}

          {/* ✅ Result */}
          {!loading && result && (
            <pre className="whitespace-pre-wrap">{result}</pre>
          )}

          {/* ❗ Default */}
          {!loading && !result && (
            <p>Tekan tombol "Start Analysis" untuk melihat hasil AI.</p>
          )}
        </div>
        <p className="text-center text-gray-600 -m-2 -mt-4 text-xs font-semibold">
          Jawaban di buat oleh AI yang mungkin bisa saja salah
        </p>
      </div>
    );
}

export default FeedbackAI