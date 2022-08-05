import { CardIdentifier } from '../types';

export class CardIdentifierBuilder {
	public static byId(id: string): CardIdentifier {
		return { id };
	}

	public static byIllustrationId(id: string): CardIdentifier {
		return { illustration_id: id };
	}

	public static byMtgoId(id: number): CardIdentifier {
		return { mtgo_id: id };
	}

	public static byMultiverseId(id: number): CardIdentifier {
		return { multiverse_id: id };
	}

	public static byName(name: string, set?: string): CardIdentifier {
		return { name, set };
	}

	public static byOracleId(id: string): CardIdentifier {
		return { oracle_id: id };
	}

	public static bySet(set: string, collectorNumber: string | number): CardIdentifier {
		return { collector_number: `${collectorNumber}`, set };
	}
}
