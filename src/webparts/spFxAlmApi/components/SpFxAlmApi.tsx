import * as React from 'react';
import styles from './SpFxAlmApi.module.scss';
import { ISpFxAlmApiProps } from './ISpFxAlmApiProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxAlmApi extends React.Component<ISpFxAlmApiProps, {}> {
  public render(): React.ReactElement<ISpFxAlmApiProps> {
    return (
      <div className={styles.spFxAlmApi}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint ALM API! 28/12/2017 13:00</span>
              <p className="ms-font-l ms-fontColor-white">This is a test for the ALM API.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
