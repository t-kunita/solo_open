import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'; // React-BootstrapのModalコンポーネントをインポート
import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート

function MakeReservation() {
    // モーダルの表示/非表示を制御するためのstate
    const [show, setShow] = useState(false);

    // モーダルを表示する関数
    const handleShow = () => setShow(true);

    // モーダルを非表示にする関数
    const handleClose = () => setShow(false);

    return (
        <div className="App">
            {/* ボタンがクリックされたらモーダルを表示 */}
            <Button variant="primary" onClick={handleShow}>
                ポップアップを開く
            </Button>

            {/* モーダル */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>モーダルタイトル</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ここにモーダルの内容を記載できます。
                </Modal.Body>
                <Modal.Footer>
                    {/* 閉じるボタン */}
                    <Button variant="secondary" onClick={handleClose}>
                        閉じる
                    </Button>
                    {/* 他のアクションボタン */}
                    <Button variant="primary" onClick={handleClose}>
                        確認
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MakeReservation;
