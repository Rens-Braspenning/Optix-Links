import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";
import styles from './OptixCaseLink.module.scss';
import { DialogType, PrimaryButton } from 'office-ui-fabric-react';

const LOG_SOURCE: string = 'OptixCaseLink';

export default class OptixCaseLink extends React.Component<IOptixCaseLinkProps, IOptixCaseLinkState> {

  // @override
  // public componentDidMount(): void {
  //   Log.info(LOG_SOURCE, 'React Element: OptixCaseLink mounted');
  // }

  // @override
  // public componentWillUnmount(): void {
  //   Log.info(LOG_SOURCE, 'React Element: OptixCaseLink unmounted');
  // }

  public constructor(props: IOptixCaseLinkProps, state: IOptixCaseLinkState) {
    super(props);

    this.state = {
      modelOpen: false
    };
  }

  @override
  public render(): React.ReactElement<{}> {

    return (
      <div>
        <PrimaryButton
          text="Open"
          onClick={() => {
            this.setState({ modelOpen: true });
          }} />
        <IFrameDialog
          url={`https://optix365.com/embed-case/${this.props.groupId}/${this.props.listId}/${this.props.listItemId}`}
          // iframeOnLoad={this._onIframeLoaded.bind(this)}
          hidden={!this.state.modelOpen}
          onDismiss={() => this.setState({ modelOpen: false })}
          allowFullScreen={true}
          title={this.props.title}
          modalProps={{
            isBlocking: true,
            // containerClassName: styles.dialogContainer
          }}
          dialogContentProps={{
            type: DialogType.close,
            showCloseButton: true
          }}
          width={`${window.innerWidth * 0.8 }px`}
          height={`${window.innerHeight * 0.8 }px`} />
      </div>
    );
  }
}

export interface IOptixCaseLinkState {
  modelOpen: boolean;
}

export interface IOptixCaseLinkProps {
  title: string;
  groupId: string;
  listId: string;
  listItemId: string;
}