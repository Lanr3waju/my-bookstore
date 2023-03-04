import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

export default function RadialProgress({ chapters, chapter }) {
    const [progressColor, setProgressColor] = useState('');

    const getValue = () => {
        const value = Math.round((chapter / chapters) * 100)
        return value
    }

    useEffect(() => {
        if (getValue() < 30) {
            setProgressColor('text-red-700')
        } else if (getValue() >= 30 && getValue() < 70) {
            setProgressColor('text-orange-600')
        }
        else if (getValue() >= 70) {
            setProgressColor('text-green-500')
        }
    }, [chapter])

    return (
        <div className={`radial-progress ${progressColor}`} style={{ "--value": `${getValue()}`, "--size": "4rem", "--thickness": "4px" }
        }> {getValue()} %</div >
    )
}

RadialProgress.propTypes = {
    chapters: PropTypes.number.isRequired,
    chapter: PropTypes.number.isRequired
};