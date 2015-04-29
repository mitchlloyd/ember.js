/**
@module ember
@submodule ember-htmlbars
*/

export default function destroyRenderNode(renderNode) {
  if (renderNode.emberView) {
    renderNode.emberView.destroy();
  }

  if (renderNode.streamUnsubscribers) {
    for (var i = 0; i < renderNode.streamUnsubscribers.length; i++) {
      renderNode.streamUnsubscribers[i]();
    }
  }

  var state = renderNode.state;
  if (!state) { return; }

  var unsubscribers = state.unsubscribers;
  if (!unsubscribers) { return; }

  for (var i=0, l=unsubscribers.length; i<l; i++) {
    unsubscribers[i]();
  }
}
