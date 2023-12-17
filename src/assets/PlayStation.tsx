import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg fill="none" height={40} viewBox="0 0 32 32" width={40}>
      <Path
        d="M.691 21.955c-1.197.839-.976 2.283 1.757 3.187 2.732.904 5.908 1.09 8.702.587-.08 0 .16 0 0 0v-2.852l-2.714.923c-1.038.335-2.076.42-3.114.168-.798-.252-.639-.755.32-1.175l5.508-2.012v-3.104l-7.664 2.768c-.958.336-1.917.839-2.795 1.51zm18.524-12.58v8.135c3.273 1.677 5.828 0 5.828-4.362 0-4.445-1.517-6.458-5.908-8.051-2.316-.839-4.71-1.594-7.106-2.097v24.239L17.618 29V8.62c0-.923 0-1.594.639-1.343.878.252.958 1.175.958 2.097zm10.38 10.65c-2.316-.838-4.791-1.173-7.187-.922-1.33.088-2.579.484-3.832.923v3.27l5.19-2.012c1.038-.336 2.076-.42 3.114-.168.798.252.638.755-.32 1.174l-7.984 3.103v3.188l11.018-4.278c.798-.335 1.517-.755 2.156-1.426.559-.838.32-2.013-2.156-2.851z"
        fill="#0070d1"
      />
    </Svg>
  );
}

export default SvgComponent;
