"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FuzzyText from '../component/FuzzyText';
import { useState } from 'react';

export default function Home() {
  const [showHearts, setShowHearts] = useState(false);
  const [showMeows, setShowMeows] = useState(false);

  const handleCatPet = () => {
    setShowHearts(true);
    setShowMeows(true);
    setTimeout(() => setShowHearts(false), 3000); // Убираем сердечки через 3 секунды
    setTimeout(() => setShowMeows(false), 7000); // Убираем мяу через 7 секунд
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.animatedText}>
        <FuzzyText 
          fontSize="clamp(1.2rem, 4vw, 3.5rem)"
          fontWeight={700}
          fontFamily="'Georgia', serif"
          color="#ffffff"
          baseIntensity={0.15} 
          hoverIntensity={0.4} 
          enableHover={true}
        >
          кот для милой белой девички
        </FuzzyText>
      </div>
      <div className={`${styles.windowGroup} ${styles.shadow}`}>
        <div className={styles.window}></div>
      </div>
      <div className={styles.windowGroup}>
        <div className={styles.window}>
          <div className={styles.windowReflections}></div>
          <div className={styles.windowReflections}></div>
          <div className={styles.windowReflections}></div>
          <div className={styles.windowIn}>
            <div className={styles.ghostGroup}>
              <div className={styles.ghost}>
                <div className={styles.bottom}>
                  <div className={styles.bottomPart}></div>
                  <div className={styles.bottomPart}></div>
                  <div className={styles.bottomPart}></div>
                </div>
                <div className={styles.eyes}></div>
              </div>
            </div>
            <div className={styles.moon}>
              <div className={styles.craters}></div>
            </div>
            <div className={styles.stars}>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
            </div>
          </div>
        </div>
        <div className={`${styles.cat} ${styles.highlight}`}>
          <div className={styles.catHead}>
            <div className={styles.ear}>
              <div className={styles.earIn}></div>
            </div>
            <div className={styles.ear}>
              <div className={styles.earIn}></div>
            </div>
          </div>
          <div className={styles.catBody}></div>
          <div className={styles.catPaw}></div>
          <div className={styles.catNeck}>
            <div className={styles.neck}>
              <div className={styles.neck}>
                <div className={styles.neck}>
                  <div className={styles.neck}>
                    <div className={styles.neck}>
                      <div className={styles.neck}>
                        <div className={styles.neck}>
                          <div className={styles.neck}>
                            <div className={styles.neck}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cat}>
          <div className={styles.catHead}>
            <div className={styles.ear}>
              <div className={styles.earIn}></div>
            </div>
            <div className={styles.ear}>
              <div className={styles.earIn}></div>
            </div>
          </div>
          <div className={styles.catBody}></div>
          <div className={styles.catPaw}></div>
          <div className={styles.catNeck}>
            <div className={styles.neck}>
              <div className={styles.neck}>
                <div className={styles.neck}>
                  <div className={styles.neck}>
                    <div className={styles.neck}>
                      <div className={styles.neck}>
                        <div className={styles.neck}>
                          <div className={styles.neck}>
                            <div className={styles.neck}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.catTail} ${styles.highlight}`}>
            <div className={styles.tail}>
              <div className={styles.tail}>
                <div className={styles.tail}>
                  <div className={styles.tail}>
                    <div className={styles.tail}>
                      <div className={styles.tail}>
                        <div className={styles.tail}>
                          <div className={`${styles.tail} ${styles.last}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.catTail} ${styles.shadow}`}>
            <div className={styles.tail}>
              <div className={styles.tail}>
                <div className={styles.tail}>
                  <div className={styles.tail}>
                    <div className={styles.tail}>
                      <div className={styles.tail}>
                        <div className={styles.tail}>
                          <div className={`${styles.tail} ${styles.last}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.catTail}>
            <div className={styles.tail}>
              <div className={styles.tail}>
                <div className={styles.tail}>
                  <div className={styles.tail}>
                    <div className={styles.tail}>
                      <div className={styles.tail}>
                        <div className={styles.tail}>
                          <div className={`${styles.tail} ${styles.last}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className={styles.bottomText}>
        <FuzzyText 
          fontSize="clamp(0.8rem, 2.5vw, 2rem)"
          fontWeight={600}
          fontFamily="'Georgia', serif"
          color="#c9a9dd"
          baseIntensity={0.1} 
          hoverIntensity={0.3} 
          enableHover={true}
        >
          теперь ты моджеш гладить фиолетового кота ;з
        </FuzzyText>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.magicButton} onClick={handleCatPet}>
          Погладить кота
        </button>
      </div>
      {showHearts && (
        <div className={styles.heartsContainer}>
          <div className={`${styles.heart} ${styles.heart1}`}>💖</div>
          <div className={`${styles.heart} ${styles.heart2}`}>💕</div>
          <div className={`${styles.heart} ${styles.heart3}`}>💗</div>
          <div className={`${styles.heart} ${styles.heart4}`}>💝</div>
          <div className={`${styles.heart} ${styles.heart5}`}>💖</div>
          <div className={`${styles.heart} ${styles.heart6}`}>💕</div>
        </div>
      )}
      {showMeows && (
        <div className={styles.meowsContainer}>
          <div className={`${styles.meow} ${styles.meow1}`}>миу</div>
          <div className={`${styles.meow} ${styles.meow2}`}>мяу😽</div>
          <div className={`${styles.meow} ${styles.meow3}`}>мур</div>
          <div className={`${styles.meow} ${styles.meow4}`}>мяу</div>
          <div className={`${styles.meow} ${styles.meow5}`}>мурр</div>
          <div className={`${styles.meow} ${styles.meow6}`}>ммиу~</div>
          <div className={`${styles.meow} ${styles.meow7}`}>мур-мур</div>
          <div className={`${styles.meow} ${styles.meow8}`}>😽мяу😽</div>
        </div>
      )}
    </div>
  );
}
