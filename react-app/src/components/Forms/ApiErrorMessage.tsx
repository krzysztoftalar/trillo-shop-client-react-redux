import React from 'react';

export interface IProps {
    apiErrors: { name: string; error: string | null };
}

const ApiErrorMessage: React.FC<IProps> = ({ apiErrors }: IProps): JSX.Element => {
    return (
        <div className="apiError">
            {apiErrors.error &&
                Object.entries(apiErrors.error).map(([key, value]) => (
                    <p key={key} className="apiError__text">
                        {value}
                    </p>
                ))}
        </div>
    );
};

export default ApiErrorMessage;
