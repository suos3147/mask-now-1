import React, { useRef, useState } from 'react'
import { PageTemplate, Loader, ColorInfo } from '../components'

import { MapContainer } from '../containers'

const MapPage = () => {
  const [loading, setLoading] = useState(true)
  const mapRef = useRef()
  return (
    <PageTemplate>
      <MapContainer loading={loading} setLoading={setLoading} mapRef={mapRef} />
      {loading && <Loader />}
      {!loading && (
        <div
          ref={mapRef}
          style={{
            flex: 1,
            margin: '0 auto',
            width: '97vw',
            position: 'relative',
          }}
        >
          <ColorInfo />
        </div>
      )}
    </PageTemplate>
  )
}

export default MapPage
