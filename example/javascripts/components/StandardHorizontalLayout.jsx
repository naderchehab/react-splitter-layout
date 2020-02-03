import React from 'react';
import SplitterLayout from '../../../index';
import Lorem from './Lorem';

export default function() {
  return (
    <SplitterLayout>
      <div className="my-pane">
        <h2>1st Pane</h2>
        <p>This is the 1st pane, and this is the primary pane by default.</p>
        <p>Try to resize the window and see how secondary pane&apos;s size keeps.</p>
        <pre>
          &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
          &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
          &nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
          &lt;/SplitterLayout&gt;
        </pre>
        <Lorem title="1st Pane" />
      </div>
      <div className="my-pane">
        <h2>2nd Pane</h2>
        <p>This is the 2nd pane, and this is the secondary pane by default.</p>
        <p>Try to resize the window and see how secondary pane&apos;s size keeps.</p>
        <pre>
          &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
          &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
          &lt;/SplitterLayout&gt;
        </pre>
        <Lorem title="2nd Pane" />
      </div>
      <div className="my-pane">
        <h2>3rd Pane</h2>
        <p>This is the 3rd pane, and this is the secondary pane by default.</p>
        <p>Try to resize the window and see how secondary pane&apos;s size keeps.</p>
        <pre>
          &lt;SplitterLayout primaryIndex={'{0}'}&gt;{'\n'}
          &nbsp;&nbsp;&lt;div&gt;1st&lt;/div&gt;{'\n'}
          &nbsp;&nbsp;<strong>&lt;div&gt;2nd&lt;/div&gt;</strong>{'\n'}
          &lt;/SplitterLayout&gt;
        </pre>
        <Lorem title="3rd Pane" />
      </div>
    </SplitterLayout>
  );
}
