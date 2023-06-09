import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Slider = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="//kinopoisk-ru.clstorage.net/143ji2y84/0bb61dtX/M2wIGf-362MlHyDPaziMiOcFWMpDFvAzc-f9hRLC32qEITZkhbORMZmmBJHsa_rx4qn3Cn7c6so-9gBf_y6_tqZIPR3Kg48S8Kphr3-9qS3m0al_wLRG0RGVS6bBEekNQBVShSAWhSRIs_EF2doexTQvFjveWT_f6jBnOCm4fdNBH0iKjXXrFqb9kmkJyxyKlxW-SkOGpuPzppn3AbMb70JVU2CBNbdUCpOA5ngcLfVm73LZD-n_PUkR1UqZu3zC0_3bON3WOTWVjEKZ-IqvWuWEbknjt6eiQKXoRHOQuRwBxVGykBT0xZuBs7e57L0U5UwBCr6bfq_YITRpytpcwoPOKXmstnlmto2D6qjr7ohlFI2rgwUF4cLlikUgoOr-sEcgo1Ok97aLweMXmi1dFnUsw0geWvyv2zPnuYoKX8FyTwkIndWpRoefMsjI2rwZxcSfK7FmxIAQF6pFc9AKHoL1gIKg5IV16oCBx7mf3uRXjUF5XtgMHkkxFFtJK94wst3pCZ0kOfflH-DLStmtCQZUrboRB9aSM2U5NuOw-YwhFVJzQCTWhZtTESWrDt7WRp1ii-w6L63rcbYLSFo9wtONWErt1fo1Va3Tq9j6bLv2VGwZwFbG0fL228dDQpkOw4dCkyDlVkTZE7Em--6s52Tt8Bq8iLzNCwH16goKLZLx_DgZnjRo1ybuINtL-986dzWfanDXhdHxRStlUvKKzqG2MwEwZxeUOOJAxCr9nqR3LqCqn6q_bBnjFUhLaY3ywE5ZOu-HqxZG3EPbGjiO-ecXz3mg1aRToNaZlVMBSeywVXJzgCdG1KsCI7XoTi2nB1wweWxpT90KgMQo2Xl_w6AvCogfZoon1o0TGfp4Xrnlti8pAZXEkCDXysbjESlPUVSzsuO296Qqg7FWaCwexnT_YLpfm0y-GZEUepqpLzChXyurz-YYFfdvkNrKm8zaB4avWtAmltPBFNumsPEIr4BnILHS5TaECOJi1cu-f4RWn6JYfAjOPtjQ9nrKam0CQ80K6RzlShSU_-CrqPpt-CR0XNpi50RwEcWbFSIBGb3DJQGTMJZEpoljw6XoTG9WxQ3Smm_YPP0J0-Qoq0gcwZPfCTmP17s3J08ieAq4HXgENqy4EgWlYKIkWXRw0qmMwzTAwtOFJkc50DEEKz_fRAXuIsheWU2PGREFiWtbD8GxLnoo7vabxLcPsGsKSB6ol0VdO_Hk1eNBFxllstI63dNEw9Nzl1TmOYNDtgtO71ZG7iEqf-lf78lDhcgI6Z7QoO16Wm1kSycm38MIqGjO-GV1XrvR1hah8YX7pROSmo_yZSDDIicWZqgz06Y4fZ8XVawjGG2r3_4KoGZJSRptE-A-ahhPxFtlVa_DOOk5Dku1R3y5IES2khAmOcZyIKsO80SScELGxvaK4BP2a93M5uX8c1tfiV4-GwDUWHiZ7fNSDiqq71fLxWctEPma-bwYRRaPabFlRZHA5nuVgbErDcOlYoDQdnUUepCg9Pl9zkVnPMEKD1lM75ky9BnKKq9AUh4pS8zm-tcUzGOL-lh-isZl7ypB9Oex4SaJxbMQ2L2xxUJTojcmhMjD0gRaLV3WBo-SGIxKnXwb4yfK2TnPgLId2lvetWpE1u_C6SvYfHmG9-6qwYXEslPmWYTwgXv_khZB4yK0Nsf5I0NEKnwOZTWfYBiPmL9PqRHmKaiZXNLQbmuojwW4BPU9wempKj8qBZY-uNM3ltIwNMl2kvG4vgMFYVLAVDU1O9IxFdg-3fcET6D7Pus8_0jjhYl6ex9gsj5IGl_lmuW2XzGIieq_KQfl3ohRJzZT0KfLB6GxGswA5LEzgCS3VvqhUSbIPf_VNRwguBwZnd75YhXYqtvPQeFPSDg8JjkG5L2jivvY3Xp3dJ15gDeWsVAlq6dxM3qdU-TCkNB1dsTq4TLV2Gx8lARcY6oMSN6uWdIF6mu7jqMDTdmrPIfZ9fcd01qY2m4J1laeGPHUh8JRF-lnErDLHSBXA1JQdraW-SGwtJhfzfQXPbG4nOlen1iBB3iayk6hQZ3K6Y73y0e0TlC5agscOOYVrjryNzewYuTJJRFC2h7gN4DTo9QlNjgTwuY7Dt2EVu1zeU-Z7324gSY4WBoM4UJcOZnNNgjUlXxCaQnazsulBb1pg5SUk2DWGNWisWof4_VAUZO2d1XrIzKUq34MxPR98Govy_7vyMIWa-q7T8BCPGjLvjYKZMX9k1sr2Q77h2ZdWzAl1aET9gl38RMIziDEAlKCBEbkK6MhNHkenOVk7DG7zuqvzHlTx7qKW9yio-9LaSyECrUVnZE5WZoN6cTGjxkB1OXD8oSrZVHBiB_jJ3Kw8IW3JTqCI2RbvI7E9w4ya29p31xakcZJuSods_AN-Ur-1cqkpw1BaArJ7po3tmyakWb049HWefTwALlPI_bBwEKFtqZJMePkKz_8tJTt8ogsS0z9GKG1CWrb_cPi7fqrvsWJ9xSMUMsYa664N5Z86lBnF_JRdZoH87Dp3oLkUWLyFiRmq1BxR5k9jZbFjcD53GlfTDmRFvpbKW3D0u4qeo8X-0SHPxLo-ureGFcHv4rgF1VQUiaJdpGjSh7zRgBhgnRH1ZsQEMS5Xs-WpL9yeK-43K3o8tXaqpmfg7G-SlvvJ-kHps8B2whoHWoUBuzaEQWHkYMk20XSEPktQdUjE2M21ffpY_N0ezy-d-acYklfWZ1e-RMm2KqL3RKz_0iYDPSLdqZN0OvaKlwoN_efu6J052OThIuksuE4v2P0s9KRt1UXifBwBrsMr4ZUvoM43jkcLgiwBCmKaEzh8n3qOl202EZFjQNoGco9OPUH_KnzNxTzgRSr5xCjGywjp7OQseVFV4vRsqRqfO8khy4gaP2r797q8sebyKktYsAvmEhPVDiXl99S2ejL_2u35e8JMjfEkfC3q7SBUsi_A6TAY-P2xNUokZDHSOyMtteMwEpue5ytqtLUY"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Мерзлая земля (сериал 2022)</h3>
            <p style={{ color: 'white' }}>
              В городе появился маньяк, и ее жених — главный подозреваемый. Пронизывающий триллер со
              Светланой Ходченковой
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="//kinopoisk-ru.clstorage.net/143ji2y84/0bb61dtX/M2wIGf-362MlHyDPaziMiOcFWMpDFvAzc-f9hRLC32qEITZkhbORMZmmBJHsa_rx4qn3Cn7c6so-9gBf_y6_tqZIPR3Kg48S8Kphr3-9qS3m0al_wLRG0RGVS6bBEekNQBVShSAWhSRIs_EF2doexTQvFjveWT_f6jBnOCm4fdNBH0iKjXXrFqb9kmkJyxyKlxW-SkOGpuPzppn3AbMb70JVU2CBNbdUCpOA5ngcLfVm73LZD-n_PUkR1UqZu3zC0_3bON3WOTWVjEKZ-IqvWuWEbknjt6eiQKXoRHOQuRwBxVGykBT0xZuBs7e57L0U5UwBCr6bfq_YITRpytpcwoPOKXmstnlmto2D6qjr7ohlFI2rgwUF4cLlikUgoOr-sEcgo1Ok97aLweMXmi1dFnUsw0geWvyv2zPnuYoKX8FyTwkIndWpRoefMsjI2rwZxcSfK7FmxIAQF6pFc9AKHoL1gIKg5IV16oCBx7mf3uRXjUF5XtgMHkkxFFtJK94wst3pCZ0kOfflH-DLStmtCQZUrboRB9aSM2U5NuOw-YwhFVJzQCTWhZtTESWrDt7WRp1ii-w6L63rcbYLSFo9wtONWErt1fo1Va3Tq9j6bLv2VGwZwFbG0fL228dDQpkOw4dCkyDlVkTZE7Em--6s52Tt8Bq8iLzNCwH16goKLZLx_DgZnjRo1ybuINtL-986dzWfanDXhdHxRStlUvKKzqG2MwEwZxeUOOJAxCr9nqR3LqCqn6q_bBnjFUhLaY3ywE5ZOu-HqxZG3EPbGjiO-ecXz3mg1aRToNaZlVMBSeywVXJzgCdG1KsCI7XoTi2nB1wweWxpT90KgMQo2Xl_w6AvCogfZoon1o0TGfp4Xrnlti8pAZXEkCDXysbjESlPUVSzsuO296Qqg7FWaCwexnT_YLpfm0y-GZEUepqpLzChXyurz-YYFfdvkNrKm8zaB4avWtAmltPBFNumsPEIr4BnILHS5TaECOJi1cu-f4RWn6JYfAjOPtjQ9nrKam0CQ80K6RzlShSU_-CrqPpt-CR0XNpi50RwEcWbFSIBGb3DJQGTMJZEpoljw6XoTG9WxQ3Smm_YPP0J0-Qoq0gcwZPfCTmP17s3J08ieAq4HXgENqy4EgWlYKIkWXRw0qmMwzTAwtOFJkc50DEEKz_fRAXuIsheWU2PGREFiWtbD8GxLnoo7vabxLcPsGsKSB6ol0VdO_Hk1eNBFxllstI63dNEw9Nzl1TmOYNDtgtO71ZG7iEqf-lf78lDhcgI6Z7QoO16Wm1kSycm38MIqGjO-GV1XrvR1hah8YX7pROSmo_yZSDDIicWZqgz06Y4fZ8XVawjGG2r3_4KoGZJSRptE-A-ahhPxFtlVa_DOOk5Dku1R3y5IES2khAmOcZyIKsO80SScELGxvaK4BP2a93M5uX8c1tfiV4-GwDUWHiZ7fNSDiqq71fLxWctEPma-bwYRRaPabFlRZHA5nuVgbErDcOlYoDQdnUUepCg9Pl9zkVnPMEKD1lM75ky9BnKKq9AUh4pS8zm-tcUzGOL-lh-isZl7ypB9Oex4SaJxbMQ2L2xxUJTojcmhMjD0gRaLV3WBo-SGIxKnXwb4yfK2TnPgLId2lvetWpE1u_C6SvYfHmG9-6qwYXEslPmWYTwgXv_khZB4yK0Nsf5I0NEKnwOZTWfYBiPmL9PqRHmKaiZXNLQbmuojwW4BPU9wempKj8qBZY-uNM3ltIwNMl2kvG4vgMFYVLAVDU1O9IxFdg-3fcET6D7Pus8_0jjhYl6ex9gsj5IGl_lmuW2XzGIieq_KQfl3ohRJzZT0KfLB6GxGswA5LEzgCS3VvqhUSbIPf_VNRwguBwZnd75YhXYqtvPQeFPSDg8JjkG5L2jivvY3Xp3dJ15gDeWsVAlq6dxM3qdU-TCkNB1dsTq4TLV2Gx8lARcY6oMSN6uWdIF6mu7jqMDTdmrPIfZ9fcd01qY2m4J1laeGPHUh8JRF-lnErDLHSBXA1JQdraW-SGwtJhfzfQXPbG4nOlen1iBB3iayk6hQZ3K6Y73y0e0TlC5agscOOYVrjryNzewYuTJJRFC2h7gN4DTo9QlNjgTwuY7Dt2EVu1zeU-Z7324gSY4WBoM4UJcOZnNNgjUlXxCaQnazsulBb1pg5SUk2DWGNWisWof4_VAUZO2d1XrIzKUq34MxPR98Govy_7vyMIWa-q7T8BCPGjLvjYKZMX9k1sr2Q77h2ZdWzAl1aET9gl38RMIziDEAlKCBEbkK6MhNHkenOVk7DG7zuqvzHlTx7qKW9yio-9LaSyECrUVnZE5WZoN6cTGjxkB1OXD8oSrZVHBiB_jJ3Kw8IW3JTqCI2RbvI7E9w4ya29p31xakcZJuSods_AN-Ur-1cqkpw1BaArJ7po3tmyakWb049HWefTwALlPI_bBwEKFtqZJMePkKz_8tJTt8ogsS0z9GKG1CWrb_cPi7fqrvsWJ9xSMUMsYa664N5Z86lBnF_JRdZoH87Dp3oLkUWLyFiRmq1BxR5k9jZbFjcD53GlfTDmRFvpbKW3D0u4qeo8X-0SHPxLo-ureGFcHv4rgF1VQUiaJdpGjSh7zRgBhgnRH1ZsQEMS5Xs-WpL9yeK-43K3o8tXaqpmfg7G-SlvvJ-kHps8B2whoHWoUBuzaEQWHkYMk20XSEPktQdUjE2M21ffpY_N0ezy-d-acYklfWZ1e-RMm2KqL3RKz_0iYDPSLdqZN0OvaKlwoN_efu6J052OThIuksuE4v2P0s9KRt1UXifBwBrsMr4ZUvoM43jkcLgiwBCmKaEzh8n3qOl202EZFjQNoGco9OPUH_KnzNxTzgRSr5xCjGywjp7OQseVFV4vRsqRqfO8khy4gaP2r797q8sebyKktYsAvmEhPVDiXl99S2ejL_2u35e8JMjfEkfC3q7SBUsi_A6TAY-P2xNUokZDHSOyMtteMwEpue5ytqtLUY"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Мерзлая земля (сериал 2022)</h3>
            <p style={{ color: 'white' }}>
              В городе появился маньяк, и ее жених — главный подозреваемый. Пронизывающий триллер со
              Светланой Ходченковой
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="//kinopoisk-ru.clstorage.net/143ji2y84/0bb61dtX/M2wIGf-362MlHyDPaziMiOcFWMpDFvAzc-f9hRLC32qEITZkhbORMZmmBJHsa_rx4qn3Cn7c6so-9gBf_y6_tqZIPR3Kg48S8Kphr3-9qS3m0al_wLRG0RGVS6bBEekNQBVShSAWhSRIs_EF2doexTQvFjveWT_f6jBnOCm4fdNBH0iKjXXrFqb9kmkJyxyKlxW-SkOGpuPzppn3AbMb70JVU2CBNbdUCpOA5ngcLfVm73LZD-n_PUkR1UqZu3zC0_3bON3WOTWVjEKZ-IqvWuWEbknjt6eiQKXoRHOQuRwBxVGykBT0xZuBs7e57L0U5UwBCr6bfq_YITRpytpcwoPOKXmstnlmto2D6qjr7ohlFI2rgwUF4cLlikUgoOr-sEcgo1Ok97aLweMXmi1dFnUsw0geWvyv2zPnuYoKX8FyTwkIndWpRoefMsjI2rwZxcSfK7FmxIAQF6pFc9AKHoL1gIKg5IV16oCBx7mf3uRXjUF5XtgMHkkxFFtJK94wst3pCZ0kOfflH-DLStmtCQZUrboRB9aSM2U5NuOw-YwhFVJzQCTWhZtTESWrDt7WRp1ii-w6L63rcbYLSFo9wtONWErt1fo1Va3Tq9j6bLv2VGwZwFbG0fL228dDQpkOw4dCkyDlVkTZE7Em--6s52Tt8Bq8iLzNCwH16goKLZLx_DgZnjRo1ybuINtL-986dzWfanDXhdHxRStlUvKKzqG2MwEwZxeUOOJAxCr9nqR3LqCqn6q_bBnjFUhLaY3ywE5ZOu-HqxZG3EPbGjiO-ecXz3mg1aRToNaZlVMBSeywVXJzgCdG1KsCI7XoTi2nB1wweWxpT90KgMQo2Xl_w6AvCogfZoon1o0TGfp4Xrnlti8pAZXEkCDXysbjESlPUVSzsuO296Qqg7FWaCwexnT_YLpfm0y-GZEUepqpLzChXyurz-YYFfdvkNrKm8zaB4avWtAmltPBFNumsPEIr4BnILHS5TaECOJi1cu-f4RWn6JYfAjOPtjQ9nrKam0CQ80K6RzlShSU_-CrqPpt-CR0XNpi50RwEcWbFSIBGb3DJQGTMJZEpoljw6XoTG9WxQ3Smm_YPP0J0-Qoq0gcwZPfCTmP17s3J08ieAq4HXgENqy4EgWlYKIkWXRw0qmMwzTAwtOFJkc50DEEKz_fRAXuIsheWU2PGREFiWtbD8GxLnoo7vabxLcPsGsKSB6ol0VdO_Hk1eNBFxllstI63dNEw9Nzl1TmOYNDtgtO71ZG7iEqf-lf78lDhcgI6Z7QoO16Wm1kSycm38MIqGjO-GV1XrvR1hah8YX7pROSmo_yZSDDIicWZqgz06Y4fZ8XVawjGG2r3_4KoGZJSRptE-A-ahhPxFtlVa_DOOk5Dku1R3y5IES2khAmOcZyIKsO80SScELGxvaK4BP2a93M5uX8c1tfiV4-GwDUWHiZ7fNSDiqq71fLxWctEPma-bwYRRaPabFlRZHA5nuVgbErDcOlYoDQdnUUepCg9Pl9zkVnPMEKD1lM75ky9BnKKq9AUh4pS8zm-tcUzGOL-lh-isZl7ypB9Oex4SaJxbMQ2L2xxUJTojcmhMjD0gRaLV3WBo-SGIxKnXwb4yfK2TnPgLId2lvetWpE1u_C6SvYfHmG9-6qwYXEslPmWYTwgXv_khZB4yK0Nsf5I0NEKnwOZTWfYBiPmL9PqRHmKaiZXNLQbmuojwW4BPU9wempKj8qBZY-uNM3ltIwNMl2kvG4vgMFYVLAVDU1O9IxFdg-3fcET6D7Pus8_0jjhYl6ex9gsj5IGl_lmuW2XzGIieq_KQfl3ohRJzZT0KfLB6GxGswA5LEzgCS3VvqhUSbIPf_VNRwguBwZnd75YhXYqtvPQeFPSDg8JjkG5L2jivvY3Xp3dJ15gDeWsVAlq6dxM3qdU-TCkNB1dsTq4TLV2Gx8lARcY6oMSN6uWdIF6mu7jqMDTdmrPIfZ9fcd01qY2m4J1laeGPHUh8JRF-lnErDLHSBXA1JQdraW-SGwtJhfzfQXPbG4nOlen1iBB3iayk6hQZ3K6Y73y0e0TlC5agscOOYVrjryNzewYuTJJRFC2h7gN4DTo9QlNjgTwuY7Dt2EVu1zeU-Z7324gSY4WBoM4UJcOZnNNgjUlXxCaQnazsulBb1pg5SUk2DWGNWisWof4_VAUZO2d1XrIzKUq34MxPR98Govy_7vyMIWa-q7T8BCPGjLvjYKZMX9k1sr2Q77h2ZdWzAl1aET9gl38RMIziDEAlKCBEbkK6MhNHkenOVk7DG7zuqvzHlTx7qKW9yio-9LaSyECrUVnZE5WZoN6cTGjxkB1OXD8oSrZVHBiB_jJ3Kw8IW3JTqCI2RbvI7E9w4ya29p31xakcZJuSods_AN-Ur-1cqkpw1BaArJ7po3tmyakWb049HWefTwALlPI_bBwEKFtqZJMePkKz_8tJTt8ogsS0z9GKG1CWrb_cPi7fqrvsWJ9xSMUMsYa664N5Z86lBnF_JRdZoH87Dp3oLkUWLyFiRmq1BxR5k9jZbFjcD53GlfTDmRFvpbKW3D0u4qeo8X-0SHPxLo-ureGFcHv4rgF1VQUiaJdpGjSh7zRgBhgnRH1ZsQEMS5Xs-WpL9yeK-43K3o8tXaqpmfg7G-SlvvJ-kHps8B2whoHWoUBuzaEQWHkYMk20XSEPktQdUjE2M21ffpY_N0ezy-d-acYklfWZ1e-RMm2KqL3RKz_0iYDPSLdqZN0OvaKlwoN_efu6J052OThIuksuE4v2P0s9KRt1UXifBwBrsMr4ZUvoM43jkcLgiwBCmKaEzh8n3qOl202EZFjQNoGco9OPUH_KnzNxTzgRSr5xCjGywjp7OQseVFV4vRsqRqfO8khy4gaP2r797q8sebyKktYsAvmEhPVDiXl99S2ejL_2u35e8JMjfEkfC3q7SBUsi_A6TAY-P2xNUokZDHSOyMtteMwEpue5ytqtLUY"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Мерзлая земля (сериал 2022)</h3>
            <p style={{ color: 'white' }}>
              В городе появился маньяк, и ее жених — главный подозреваемый. Пронизывающий триллер со
              Светланой Ходченковой
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
