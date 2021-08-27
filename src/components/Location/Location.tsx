import React from 'react';
import dynamic from 'next/dynamic';

import { useRestaurants } from '@hooks/useRestaurants';

const MapComponent = dynamic(() => import('@components/Map/Map'), {
  ssr: false,
});

function Location(): React.ReactElement {
  const { terms } = useRestaurants();

  return (
    <section className={'leaflet'}>
      {terms.length && (
        <MapComponent
          marker={terms[0].description}
          geolocation={terms[0].field_geolocation}
        />
      )}
    </section>
  );
}

export default Location;
