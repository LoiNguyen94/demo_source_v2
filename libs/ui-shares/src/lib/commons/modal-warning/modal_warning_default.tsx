import { useWindowSize } from '@monorepo/function-shares';
import { Buttons } from '@monorepo/ui-shares';
import { Modal } from 'antd';

export interface ModalWarningDefaultProps {
  handle(): any;
  data: string[]; //[title,content]
}

export function ModalWarningDefault({
  // visibleParent = false,
  data=['',''],
  handle,
}: ModalWarningDefaultProps) {
  const { widthFixed, positionModal } = useWindowSize();

  return (
    <Modal
      centered={true}
      bodyStyle={{
        width: '100%',
        borderRadius: 8,
      }}
      width={widthFixed - 60}
      maskClosable={true}
      footer={false}
      closable={false}
      transitionName=""
      visible={true}
    >
      <div
        style={{
          fontSize: 16,
          color: '#0F172A',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {data[0]}
      </div>
      <div
        style={{
          fontSize: 14,
          color: '#7C7C7C',
          fontWeight: 400,
          textAlign: 'center',
          padding: '10px 10px 15px 10px',
        }}
      >
         {data[1]}
      </div>
      <Buttons
        title="Đã hiểu"
        handleClick={handle}
        bgColor={'#EC4261'}
        titleColor={'#FFFFFF'}
      />
    </Modal>
  );
}

export default ModalWarningDefault;
