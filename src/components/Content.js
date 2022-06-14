import Themecontext from './Contexts/themeContext';
import FunctionButton from './FunctionButton';
import FunctionWrapper from './FunctionWrapper';
const Content = () => {
  return (
    <div>
        <h1>This is content</h1>
        <FunctionWrapper >
          {(count, handler) => {
            return (
                <Themecontext.Consumer>{({theme}) => <FunctionButton count={count}  theme={theme} handler={handler}/>}</Themecontext.Consumer>
            )
            
          }}
        </FunctionWrapper>
    </div>
  )
}

export default Content