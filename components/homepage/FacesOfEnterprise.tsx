import Image from 'next/image'

export default function FacesOfEnterprise() {
    return (
        <section className="py-24">
            {/* Background image wrapper */}
            <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden min-h-[80vh]">
                
                {/* Background image */}
                <Image
                    src="/images/maroon-ng3.jpg"
                    alt="Faces of Enterprise"
                    fill
                    className="object-cover object-center opacity-90"
                />

                {/* Foreground content sits on top of the background */}
                <div className="relative z-10 px-6 py-12 flex flex-col min-h-[80vh]">
                    
                    {/* Two-column row */}
                    <div className="flex gap-6 mt-auto">
                        {/* Image column */}
                        <div className="relative w-1/2 h-[400px] rounded-2xl overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/image-6.jpg"
                                alt="Faces of Enterprise"
                                fill
                                className="object-cover object-center opacity-90"
                            />
                        </div>

                        {/* Content column */}
                        <div className="flex-1 text-white">
                            content
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}