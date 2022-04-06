import React from 'react'
import Carousel from './Carousel/Carousel'
import { Navbar } from './Navbar'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', marginTop: 500 }}>
                <Carousel
                    show={4}
                >
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
