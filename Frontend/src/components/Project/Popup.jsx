import React from 'react'

const Popup = ({ currentProject, setShowModal, handleSubmitProject, loading }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Konfirmasi Penyelesaian Project
                </h3>
                <p className="text-gray-600 mb-6">
                    Apakah Anda yakin ingin menyelesaikan project <span className="font-semibold text-gray-800">"{currentProject?.title}"</span>?
                </p>
                <p className="text-sm text-gray-500 mb-6 bg-gray-50 p-3 rounded">
                    Setelah dikonfirmasi, project ini tidak dapat diubah dan akan masuk ke histori Anda.
                </p>
                <div className="flex gap-4 justify-end">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmitProject}
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Sedang Diproses...' : 'Konfirmasi'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Popup