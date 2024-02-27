interface CardIdentifierId {
	id: string;
}

interface CardIdentifierIllustrationId {
	illustration_id: string;
}

interface CardIdentifierMtgGoId {
	mtgo_id: number;
}

interface CardIdentifierMultiverseId {
	multiverse_id: number;
}

interface CardIdentifierNameSet {
	name: string;
	set?: string;
}

interface CardIdentifierOracleId {
	oracle_id: string;
}

interface CardIdentifierCollectorSet {
	collector_number: string;
	set: string;
}

type CardIdentifier =
	| CardIdentifierId
	| CardIdentifierIllustrationId
	| CardIdentifierMtgGoId
	| CardIdentifierMultiverseId
	| CardIdentifierNameSet
	| CardIdentifierOracleId
	| CardIdentifierCollectorSet;

export type {
	CardIdentifier,
	CardIdentifierCollectorSet,
	CardIdentifierId,
	CardIdentifierIllustrationId,
	CardIdentifierMtgGoId,
	CardIdentifierMultiverseId,
	CardIdentifierNameSet,
	CardIdentifierOracleId,
};
