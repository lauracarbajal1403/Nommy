export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-turquoise/10 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-turquoise mx-auto mb-4"></div>
                <p className="text-navy text-lg">Cargando NOMMY...</p>
            </div>
        </div>
    )
}
