import React, { useRef, useState } from 'react'
import { PageTemplate, Loader, ColorInfo } from '../components'

import { MapContainer } from '../containers'

const MapPage = () => {
  const [loading, setLoading] = useState(false)
  const mapRef = useRef()
  return (
    <PageTemplate>
      <ColorInfo />
      <MapContainer loading={loading} setLoading={setLoading} mapRef={mapRef} />
      {loading && <Loader />}
      {!loading && (
        <div
          ref={mapRef}
          style={{
            flex: 1,
            marginLeft: '-0.5rem',
            width: '99vw',
          }}
        ></div>
      )}
    </PageTemplate>
  )
}

export default MapPage
