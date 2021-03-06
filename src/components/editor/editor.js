import styles from './editor.module.css'

export default function Editor () {
  return (
    <div
      className={styles.wrap}
    >
      <div
        className={styles.editor}
        contentEditable
        dangerouslySetInnerHTML={{
          __html: `
          Elizabeth Raffald (1733–1781) was an English author, innovator and entrepreneur. Born and raised in Doncaster, Yorkshire, Raffald went into domestic service for fifteen years, ending as the housekeeper to the Warburton baronets at Arley Hall, Cheshire. She moved with her husband to Manchester, where she opened a register office to introduce domestic workers to employers; she also ran a cookery school and sold food from the premises. In 1769 she published her cookery book The Experienced English Housekeeper, which contains the first recipe for a "Bride Cake" that is recognisable as a modern wedding cake. She is possibly the inventor of the Eccles cake. In August 1772 Raffald published The Manchester Directory, a listing of 1,505 traders and civic leaders in Manchester—the first such listing for the up-and-coming town. Her recipes were plagiarised by other authors, notably by Isabella Beeton in her bestselling Mrs Beeton's Book of Household Management (1861).
          <br><br><br>`
        }}
      />
    </div>
  )
}
