import { FaFileDownload } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import styles from './styles.module.sass';

interface DownloadCVProps {
  filePath: string;
  fileName: string;
  buttonText: string;
}

export const DownloadCV = ({ filePath, fileName, buttonText }: DownloadCVProps) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Failed to download file');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Download started successfully!', {
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
        },
      });
    } catch (error) {
      toast.error('Error downloading the resume. Please try again.', {
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
        },
      });
    }
  };

  return (
    <button 
      className={styles.downloadButton}
      onClick={handleDownload}
      aria-label={`Download ${buttonText}`}
    >
      <FaFileDownload />
      <span>{buttonText}</span>
    </button>
  );
};
