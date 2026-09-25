"use client";

import { useState } from "react";
import { useLanguage } from "./language-provider";
import styles from "./sdlc-workflow.module.css";

const stages = [
  { id: "discover", number: "01", glyph: "?", bars: [25, 42, 34, 62, 82] },
  { id: "plan", number: "02", glyph: "≡", bars: [76, 55, 85, 67, 100] },
  { id: "design", number: "03", glyph: "✳", bars: [40, 68, 48, 85, 72] },
  { id: "build", number: "04", glyph: "</>", bars: [30, 46, 64, 82, 100] },
  { id: "test", number: "05", glyph: "✓", bars: [100, 84, 94, 88, 100] },
  { id: "launch", number: "06", glyph: "↗", bars: [20, 34, 55, 72, 100] },
] as const;

type Stage = (typeof stages)[number];

function StageCard({
  stage,
  selected,
  onSelect,
  t,
}: {
  stage: Stage;
  selected: boolean;
  onSelect: () => void;
  t: (key: string) => string;
}) {
  return (
    <button
      type="button"
      className={`${styles.stageCard} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={`${stage.number}. ${t(`sdlc.${stage.id}.title`)}`}
    >
      <span className={styles.cardTop}>
        <span className={styles.glyph} aria-hidden="true">
          {stage.glyph}
        </span>
        <span className={styles.number}>{stage.number} / 06</span>
      </span>
      <span className={styles.sparkline} aria-hidden="true">
        {stage.bars.map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </span>
      <span className={styles.cardTitle}>{t(`sdlc.${stage.id}.title`)}</span>
      <span className={styles.cardCaption}>{t(`sdlc.${stage.id}.short`)}</span>
    </button>
  );
}

export function SdlcWorkflow() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <div className={styles.workflow} aria-label={t("sdlc.diagramLabel")}>
      <div className={styles.diagram}>
        <div className={`${styles.cardColumn} ${styles.leftColumn}`}>
          {stages.slice(0, 3).map((stage, index) => (
            <StageCard
              key={stage.id}
              stage={stage}
              selected={active === index}
              onSelect={() => setActive(index)}
              t={t}
            />
          ))}
        </div>

        <div className={styles.centerWrap}>
          <div className={styles.orbit} aria-hidden="true" />
          <div
            className={styles.centerPanel}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className={styles.panelChrome}>
              <span className={styles.chromeDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>{t("sdlc.panelLabel")}</span>
              <span className={styles.panelStatus}>
                <span /> {t("sdlc.inProgress")}
              </span>
            </div>
            <div className={styles.panelBody}>
              <span className={styles.panelKicker}>
                {t("sdlc.currentStage")} / {current.number}
              </span>
              <div className={styles.panelGlyph} aria-hidden="true">
                {current.glyph}
              </div>
              <h4>{t(`sdlc.${current.id}.title`)}</h4>
              <p>{t(`sdlc.${current.id}.detail`)}</p>
              <div className={styles.deliverable}>
                <span className={styles.deliverableIcon} aria-hidden="true">
                  ✓
                </span>
                <span>
                  <small>{t("sdlc.output")}</small>
                  <strong>{t(`sdlc.${current.id}.output`)}</strong>
                </span>
              </div>
            </div>
            <div className={styles.panelFooter}>
              <span>{t("sdlc.cycle")}</span>
              <div className={styles.progressTrack} aria-hidden="true">
                <span
                  style={{ width: `${((active + 1) / stages.length) * 100}%` }}
                />
              </div>
              <strong>{String(active + 1).padStart(2, "0")}/06</strong>
            </div>
          </div>
        </div>

        <div className={`${styles.cardColumn} ${styles.rightColumn}`}>
          {stages.slice(3).map((stage, index) => (
            <StageCard
              key={stage.id}
              stage={stage}
              selected={active === index + 3}
              onSelect={() => setActive(index + 3)}
              t={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
