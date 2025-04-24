import { FaFileDownload } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import styles from './styles.module.sass'

export const DownloadCV = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/curriculo-gustavo-henrique.pdf')
      if (!response.ok) throw new Error('Falha ao baixar o arquivo')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Currículo-Gustavo-Henrique.pdf'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast.success('Download iniciado com sucesso!', {
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
        },
      })
    } catch (error) {
      toast.error('Erro ao baixar o currículo. Tente novamente.', {
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
        },
      })
    }
  }

  return (
    <button 
      className={styles.downloadButton}
      onClick={handleDownload}
      aria-label="Baixar Currículo"
    >
      <FaFileDownload />
      <span>Download CV</span>
    </button>
  )
}