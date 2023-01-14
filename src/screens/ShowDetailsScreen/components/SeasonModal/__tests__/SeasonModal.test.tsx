import React, {createRef} from 'react';
import {render} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import {act} from 'react-test-renderer';

describe('SeasonModal', () => {
  test('the component render', () => {
    const modalizeRef = createRef<Modalize>(null);

    const {debug} = render(
      <SeasonModal
        ref={modalizeRef}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open;
    });

    expect(getAllB);
  });
});
