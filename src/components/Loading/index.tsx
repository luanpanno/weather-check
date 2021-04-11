import { Container } from './styles';

interface Props {
  color?: string;
}

const Loading: React.FC<Props> = ({ color }) => {
  return (
    <Container className="loading-container" color={color}>
      <div className="loadingio-spinner-rolling-5kt3aau2lso">
        <div className="ldio-1fy5qn15irf">
          <div />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
