import React from 'react';
import ReactDOM from 'react-dom';
import {productName, version} from '../../package.json';

import logo from '../icon/ScratchDesktop.svg';
import styles from './about.css';
import showPrivacyPolicy from './showPrivacyPolicy';

const AboutElement = () => (
    <div className={styles.aboutBox}>
        <div><img
            alt={`${productName} icon`}
            src={logo}
            className={styles.aboutLogo}
        /></div>
        <div className={styles.aboutText}>
            <h2>{productName}</h2>
            Version {version}
            <table className={styles.aboutDetails}><tbody>
                {
                    ['Electron', 'Chrome', 'Node'].map(component => {
                        const componentVersion = process.versions[component.toLowerCase()];
                        return <tr key={component}><td>{component}</td><td>{componentVersion}</td></tr>;
                    })
                }
            </tbody></table>
            <p className={styles.aboutFooter}>
                <a
                    // The `href` attribute causes link styling to be applied. The value doesn't really matter but using a
                    // reasonable value might make testing easier, or at least makes the HTML more readable. The `onClick`
                    // function actually handles opening the privacy policy window.
                    href="./index.html?route=privacy"
                    onClick={showPrivacyPolicy}
                >View the Privacy Policy...</a>
            </p>
        </div>
    </div>
);

const appTarget = document.getElementById('app');
ReactDOM.render(<AboutElement />, appTarget);
